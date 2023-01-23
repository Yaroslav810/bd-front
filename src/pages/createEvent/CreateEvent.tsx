import styles from './CreateEvent.module.css'

// TODO: ���������� input �� Input, � ��������� �������� placeholder
// ���������� enteredTitle � ��
// ��������� ���� ���� �� �������

function CreateEvent() {
  return <div className={styles.container}>
    <div className={styles.btnDownload}>
      <a href='/'>Download background</a>
    </div>

    <div className={styles.content}>
      <div className={styles.rightContent}>
        <form>
          <input
            type="text"
            placeholder="Title"

          ></input>
          <input type="text" placeholder="Descripsion"></input>
          <input type="text" placeholder="Link to general chat"></input>
        </form>
        <div className={styles.btnSave}>
          <a href='/'>Save</a>
        </div>
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
