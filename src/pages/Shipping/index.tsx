import { FC } from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { FiAlertCircle } from 'react-icons/fi'
import { GiTakeMyMoney } from 'react-icons/gi'

import style from './index.module.scss'
import { useTypedSelector } from 'hooks'
import {ContactInfo, MessageBlock} from 'components'
import { TitleH1, TitleH4 } from 'ui'

const Shipping: FC = (): JSX.Element => {
  const { shippingList, calculationList } = useTypedSelector(({ textData }) => textData)

  return (
    <section className='shipping__container'>
      <TitleH1>Доставка и оплата</TitleH1>
      <MessageBlock
        BackIcon={<GiTakeMyMoney/>}
        ListIcon={<FiAlertCircle/>}
        textList={shippingList}
      />
      <div className={style.textBlock}>
        <p className={style.article}>
          Время доставки оптовой продукции по всей Беларуси и странам
          Европейского союза определяется по договоренности с клиентом. Если
          Вами неправильно указан номер телефона или адрес доставки, это может
          привести к дополнительной задержке! При оформлении заявки вносите,
          пожалуйста, корректные данны
        </p>
        <p className={style.article}>
          Доставка продукции осуществляется по адресу, указанному при оформлении
          заказа. Если необходимо доставить товар по иному адресу, необходимо
          сообщить адрес менеджеру компании, который с Вами свяжется
          непосредственно после оформления заказа.
        </p>
        <MessageBlock
          BackIcon={<FaShippingFast />}
          ListIcon={<FiAlertCircle/>}
          textList={calculationList}
        />
        <div className={style.article}>
          При доставке Вам будут переданы все необходимые документы на покупку
          продукции:
          <ul>
            <li>— счет-фактура;</li>
            <li>
              — накладная, в которой необходимо поставить печать Вашей
              организации.
            </li>
          </ul>
          Цена, указанная в переданных Вам документах, является{' '}
          <b>окончательной</b>.
        </div>
        <p className={style.article}>
          При доставке Вам заказанной продукции проверяйте комплектность
          доставленного товара, также проверьте товар на наличие механических
          повреждений. При не заявлении Вами при получении продукции претензий
          по поводу механических повреждений, в дальнейшем подобные претензии не
          рассматриваются.
        </p>
      </div>
      <TitleH4>
        В случае вопросов, пожеланий и претензий обращайтесь к нам по следующим
        координатам:
      </TitleH4>
      <ContactInfo />
    </section>
  )
}

export default Shipping
