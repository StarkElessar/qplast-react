import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { FiAlertCircle } from 'react-icons/fi'
import { GiTakeMyMoney } from 'react-icons/gi'

import s from './index.module.scss'
import ContactInfo from '@components/ContactInfo'
import MessageBlock from '@components/MessageBlock'
import { useSelector } from 'react-redux'

const Shipping = () => {
  const { shippingList, calculationList } = useSelector(({ textData }) => textData)
  
  return (
    <section className='shipping__container'>
      <h1 className={s.mainTitle}>Доставка и оплата</h1>
      <MessageBlock
        BackIcon={GiTakeMyMoney}
        ListIcon={FiAlertCircle}
        textList={shippingList}
      />
      <div className={s.textBlock}>
        <p className={s.article}>
          Время доставки оптовой продукции по всей Беларуси и странам Европейского союза определяется по договоренности с клиентом. Если Вами неправильно указан номер телефона или адрес доставки, это может привести к дополнительной задержке! При оформлении заявки вносите, пожалуйста, корректные данны
        </p>
        <p className={s.article}>
          Доставка продукции осуществляется по адресу, указанному при оформлении заказа. Если необходимо доставить товар по иному адресу, необходимо сообщить адрес менеджеру компании, который с Вами свяжется непосредственно после оформления заказа.
        </p>
        <MessageBlock
          BackIcon={FaShippingFast}
          ListIcon={FiAlertCircle}
          textList={calculationList}
        />
        <div className={s.article}>
          При доставке Вам будут переданы все необходимые документы на покупку продукции:
          <ul>
            <li>
              — счет-фактура;
            </li>
            <li>
              — накладная, в которой необходимо поставить печать Вашей организации.
            </li>
          </ul>
          Цена, указанная в переданных Вам документах, является <b>окончательной</b>.
        </div>
        <p className={s.article}>
          При доставке Вам заказанной продукции проверяйте комплектность доставленного товара, также проверьте товар на наличие механических повреждений. При не заявлении Вами при получении продукции претензий по поводу механических повреждений, в дальнейшем подобные претензии не рассматриваются.
        </p>
      </div>
      <h3 className={s.title}>
        В случае вопросов, пожеланий и претензий обращайтесь к нам по следующим координатам:
      </h3>
      <ContactInfo />
    </section>
  )
}

export default Shipping