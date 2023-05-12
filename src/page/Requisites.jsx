import CustomLink from '../components/links/CustomLink'
import styles from './styles/Pages.module.scss'
export default function Requisites() {
  return (
    <div className={styles.requisites}>
      <div><CustomLink to={'/'} className="back">
        На Главную
      </CustomLink></div>

      <div className={styles.title}>Реквизиты</div>

      <div className={styles.requisites_content}>       
        <div className={styles.row}>
          <div className={styles.row_item}>
            Реквизиты Полное наименование (согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>Limited Liability Company «THE BIGGEST CLOUD«</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>
            Сокращенное наименование(согласно учредительным документам):
          </div>
          <div></div>
          <div className={styles.row_item}>          
           LLC «THE BIGGEST CLOUD«
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.row_item}>Название компании:</div>
        <div></div>
        <div className={styles.row_item}>
                        TUR-MIA
          </div>
        </div>
        <div className={styles.row}>
        <div className={styles.row_item}>Адрес местонахождения:</div>
        <div></div>
        <div className={styles.row_item}>
                        Uzbekistan, Tashkent city Mirabad district Sarakul MFY, 50/2 Sarakul
            street-house
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>ИНН:</div>
        <div></div>
        <div className={styles.row_item}> 310045950</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Расчетный счет:</div>
        <div></div>
        <div className={styles.row_item}> 20208000805591030001</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Наименование учреждения банка:</div>
        <div></div>
        <div className={styles.row_item}>           
            Joint Stock Innovation Commercial Bank «Ipak Yuli” Mirabad branch
          </div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Адрес:</div>
        <div></div>
        <div className={styles.row_item}> 100015, Tashkent city, Mirabad street, 25</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Телефоны:</div>
        <div></div>
        <div className={styles.row_item}> +79810424934</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Почта:</div>
        <div></div>
        <div className={styles.row_item}> info@thebiggestcloudmchj.uz</div>
        </div>

        <div className={styles.row}>
        <div className={styles.row_item}>Генеральный директор:</div>
        <div></div>
        <div className={styles.row_item}> SINDAROV SHOHRUX RAIMJON O’G’LI</div>
        </div>
      </div>
    </div>
  )
}
