import { Button, ImageListItem } from '@mui/material'
import { FormEvent, useRef, useState } from 'react'
import styles from './CreateEvent.module.css'

// TODO: ���������� input �� Input, � ��������� �������� placeholder
// ���������� enteredTitle � ��
// ��������� ���� ���� �� �������

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const fileIField = useRef<HTMLInputElement>(null)

  function onLoadImage() {
    if (fileIField.current !== null) {
      if (image === null) {
        fileIField.current.click()
      } else {
        setImage(null)
        fileIField.current.value = ''
      }
    }
  }

  function onChangeImage(event: FormEvent<HTMLInputElement>) {
    if (event.currentTarget.files === null || event.currentTarget.files.length === 0) {
      return
    }

    const file: File = event.currentTarget.files[0]
    const promise = new Promise(resolve => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
    })

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    void promise.then(data => setImage(data ? data.toString() : ''))
  }

  return <div className={styles.container}>
    <div className={styles.btnSave}>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          console.log(title)
        }}
      >
        Сохранить
      </Button>
    </div>

    <div className={styles.btnDownload}>
      {image === null
        ? <Button onClick={onLoadImage}>Загрузить изображение</Button>
        : <Button onClick={onLoadImage}>Удалить изображение</Button>}
      <input ref={fileIField} type="file" className={styles.downloadField} onChange={onChangeImage} />
      {image && <ImageListItem sx={{ width: 600, height: 300 }}><img src={image} alt="image"/></ImageListItem>}
    </div>

    <div className={styles.content}>
      <div className={styles.rightContent}>
        <form>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea placeholder="Description"></textarea>
          <input type="text" placeholder="Link to general chat"></input>
        </form>
      </div>

      <div className={styles.leftContent}>
        <form>
          <div className={styles.time}>
            <input type="datetime-local" id="localdateBefore" name="date"></input>
          </div>
          <div className={styles.time}>
            <input type="datetime-local" id="localdateAfter" name="date"></input>
          </div>
          <div className={styles.adressIn}>
            <p>Departure point:</p>
            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='City'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='Street'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='House'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='Kvartira'
                >
                </input>
              </div>
            </div>
          </div>

          <div className={styles.adressOut}>
            <p>Place of arrival:</p>
            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='City'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='Street'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='House'
                >
                </input>
              </div>
            </div>

            <div className={styles.suggestionItem}>
              <div className={styles.col}>
                <input
                  type="text"
                  className={styles.suggestionEditable}
                  placeholder='Kvartira'
                >
                </input>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
}

export {
  CreateEvent
}
