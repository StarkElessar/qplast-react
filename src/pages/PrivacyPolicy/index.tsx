import { FC } from 'react'

import style from './index.module.scss'
import { TitleH1, TitleH3 } from 'ui'

const PrivacyPolicy: FC = (): JSX.Element => {
  return (
    <section className='privacy__container'>
      <TitleH1>Политика конфиденциальности</TitleH1>
      <TitleH3>Кто мы</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Адрес нашего сайта: <span>https://qplast.by</span>
        </p>
      </div>
      <TitleH3>Коментарии</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Если посетитель оставляет комментарий на сайте, мы собираем данные,
          указанные в форме комментария, а также <span>IP-адрес</span>{' '}
          посетителя и данные user-agent браузера с целью определения спама.
        </p>
        <p className={style.article}>
          Анонимизированная строка, создаваемая из вашего адреса{' '}
          <span>email («хеш»)</span>, может предоставляться сервису Gravatar,
          чтобы определить, используете ли вы его. Политика конфиденциальности
          Gravatar доступна здесь:
          <span>https://automattic.com/privacy/</span>. После одобрения
          комментария ваше изображение профиля будет видимым публично в
          контексте вашего комментария.
        </p>
      </div>
      <TitleH3>Медиафайлы</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Если вы зарегистрированный пользователь и загружаете фотографии на
          сайт, вам, возможно, следует избегать загрузки изображений с
          метаданными <span>EXIF</span>, так как они могут содержать данные
          вашего месторасположения по <span>GPS</span>. Посетители могут извлечь
          эту информацию, скачав изображения с сайта.
        </p>
      </div>
      <TitleH3>Куки</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Если вы оставляете комментарий на нашем сайте, вы можете включить
          сохранение вашего имени, адреса email и вебсайта в куки. Это делается
          для вашего удобства, чтобы не заполнять данные снова при повторном
          комментировании. Эти куки хранятся в течение одного года.
        </p>
        <p className={style.article}>
          Если у вас есть учетная запись на сайте и вы войдете в неё, мы
          установим временный куки для определения поддержки куки вашим
          браузером, куки не содержит никакой личной информации и удаляется при
          закрытии вашего браузера.
        </p>
        <p className={style.article}>
          При входе в учетную запись мы также устанавливаем несколько куки с
          данными входа и настройками экрана. Куки входа хранятся в течение двух
          дней, куки с настройками экрана — год. Если вы выберете возможность
          «Запомнить меня», данные о входе будут сохраняться в течение двух
          недель. При выходе из учетной записи куки входа будут удалены.
        </p>
        <p className={style.article}>
          При редактировании или публикации статьи в браузере будет сохранен
          дополнительный куки, он не содержит персональных данных и содержит
          только ID записи, отредактированной вами, истекает через 1 день.
        </p>
      </div>
      <TitleH3>Встраиваемое содержимое других вебсайтов</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Статьи на этом сайте могут включать встраиваемое содержимое (например,
          видео, изображения, статьи и др.), подобное содержимое ведет себя так
          же, как если бы посетитель зашел на другой сайт.
        </p>
        <p className={style.article}>
          Эти сайты могут собирать данные о вас, использовать куки, внедрять
          дополнительное отслеживание третьей стороной и следить за вашим
          взаимодействием с внедренным содержимым, включая отслеживание
          взаимодействия, если у вас есть учетная запись и вы авторизовались на
          том сайте.
        </p>
      </div>
      <TitleH3>С кем мы делимся вашими данными</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Если вы запросите сброс пароля, ваш IP будет указан в email-сообщении
          о сбросе.
        </p>
      </div>
      <TitleH3>Как долго мы храним ваши данные</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Если вы оставляете комментарий, то сам комментарий и его метаданные
          сохраняются неопределенно долго. Это делается для того, чтобы
          определять и одобрять последующие комментарии автоматически, вместо
          помещения их в очередь на одобрение.
        </p>
        <p className={style.article}>
          Для пользователей с регистрацией на нашем сайте мы храним ту личную
          информацию, которую они указывают в своем профиле. Все пользователи
          могут видеть, редактировать или удалить свою информацию из профиля в
          любое время (кроме имени пользователя). Администрация вебсайта также
          может видеть и изменять эту информацию.
        </p>
      </div>
      <TitleH3>Какие у вас права на ваши данные</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          При наличии учетной записи на сайте или если вы оставляли комментарии,
          то вы можете запросить файл экспорта персональных данных, которые мы
          сохранили о вас, включая предоставленные вами данные. Вы также можете
          запросить удаление этих данных, это не включает данные, которые мы
          обязаны хранить в административных целях, по закону или целях
          безопасности.
        </p>
      </div>
      <TitleH3>Куда мы отправляем ваши данные</TitleH3>
      <div className={style.textBlock}>
        <p className={style.article}>
          Комментарии пользователей могут проверяться автоматическим сервисом
          определения спама.
        </p>
      </div>
    </section>
  )
}

export default PrivacyPolicy
