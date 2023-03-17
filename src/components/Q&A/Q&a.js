import React, { Component } from "react";
import PropTypes from "prop-types";
import img from "../../img/qa.jpg";

import s from "./Q&a.module.css";

class Qa extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <section className={s.section}>
        <div className={s.wrapperQa}>
          <h2 className={s.title} id="qa">
            вопросы
          </h2>
          <ul className={s.qaList}>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>
                  Что мне понадобится для прохождения курса, кроме видео-уроков?
                </p>
              </div>
              {visible && (
                <p>
                  Я рекомендую вам перед началом курса, произвести чистку лица у
                  косметолога. <br />
                  На курсе вам понадобится:
                  <br /> 1)Очищающий гель или пенка. Перед каждым массажем
                  тщательно очищаем кожу. <br />
                  2)Масло или крем по которому вы будете делать массаж. <br />
                  3)Если массаж будет производиться по маслу, то вам понадобится
                  гидрофильное масло, для того, чтобы убрать остатки масла.
                  <br /> 4)На каждом курсе мы будем осваивать технику массажа с
                  помощью какого-то гаджета. На курсе 25+ вам понадобится
                  вакуумная баночка для лица. Если вы купили курс 35+, то
                  приобретайте скребок Гуаша. А на курсе 45+ я жду Вас с
                  роллером из натурального камня.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Какие есть противопоказания?</p>
              </div>
              {visible && (
                <p>
                  Онкологические заболевания,герпес,открытые воспаления,большое
                  количество родинок,активная стадия купероза, острый неврит
                  лицевых нервов — являются противопоказаниями. <br />
                  Если у вас есть проблемы с щитовидной железой или есть зона
                  пораженная куперозом — эту зону не массируем. <br />
                  Если есть инъекции (ботокс, филлеры) — уточняйте у
                  косметолога, через какое время можно начинать делать массаж.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Сколько по времени длится массаж?</p>
              </div>
              {visible && (
                <p>
                  Уроки длятся 10-20 минут. Длительность зависит от техники и
                  интенсивности.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Возможен ли возврат после покупки?</p>
              </div>
              {visible && (
                <p>
                  Это информационный продукт, доступ к нему вы получаете сразу
                  после оплаты. Поэтому возврат невозможен.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Вызывает ли массажное масло прыщи?</p>
              </div>
              {visible && (
                <p>
                  Если вы выбрали некомедогенное масло (я расскажу вам об этом
                  на курсе), хорошо очищаете руки и гаджеты и смываете масло
                  гидрофильным маслом, то всё будет хорошо.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>
                  А правда, что кожа от массажа растягивается?
                </p>
              </div>
              {visible && (
                <p>
                  Нет, конечно! <br />
                  Наша кожа эластичная и тянется чаще и больше, чем нам кажется,
                  когда мы разговариваем, улыбаемся, едим. Массаж не растягивает
                  кожу, а делает ее более подтянутой.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Когда я могу приступить к курсу?</p>
              </div>
              {visible && (
                <p>
                  Сразу после оплаты Вам будет открыт доступ. Длительность
                  доступа — 30 дней. Курс состоит из 10 уроков. Соответственно,
                  чтобы успеть пройти курс Вам нужно начать не позднее, чем на
                  20-ый день после оплаты.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>Когда я увижу результат?</p>
              </div>
              {visible && (
                <p>
                  Вы почувствуете результат после первого массажа. Визуальные
                  изменения появятся после 5-го массажа. 10 массажей хватит,
                  чтобы закрепить результат. Для наглядности сфотографируйте
                  своё лицо и зону декольте при дневном свете перед первым
                  сеансом и в конце 10-го. После того, как вы закончите курс,
                  рекомендую вам делать массаж 1 раз в неделю.
                </p>
              )}
            </li>
            <li className={s.qaItem} onClick={this.toggle}>
              <div>
                <p className={s.question}>
                  Кому я могу задать дополнительные вопросы?
                </p>
              </div>
              {visible && <p>Пишите мне в директ в инстаграм.</p>}
            </li>
          </ul>
        </div>
        <div>
          <img src={img} alt="hands" />
        </div>
      </section>
    );
  }
}

// const Qa = ({ title }) => {
//   return (
//     <section className={s.section}>
//       <div className={s.wrapperQa}>
//         <h2 className={s.title} id="qa">
//           {title}
//         </h2>
//         <ul className={s.qaList}>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>
//                 Что мне понадобится для прохождения курса, кроме видео-уроков?
//               </p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>Сколько по времени длится массаж?</p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>Вызывает ли массажное масло прыщи?</p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>Возможен ли возврат после покупки?</p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>Когда я могу приступить к курсу?</p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>Когда я увижу результат?</p>
//             </div>
//           </li>
//           <li className={s.qaItem}>
//             <div>
//               <p className={s.question}>
//                 Кому я могу задать дополнительные вопросы?
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <img src={img} alt="hands" />
//       </div>
//     </section>
//   );
// };

Qa.defaultProps = { title: "вопросы" };

Qa.propTypes = { title: PropTypes.string };

export default Qa;
