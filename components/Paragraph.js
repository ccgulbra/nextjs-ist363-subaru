import classnames from 'classnames/bind';

import styles from './paragraph.module.scss';

const cx = classnames.bind(styles);

const Paragraph = ({children, color, marginBottom, marginTop, marginLeft, marginRight}) => {
    const paragraphClasses=cx({
        paragraph: true,
        [`font-color-${color}`]: color,

        [`margin-top-${marginTop}`] : marginTop,
        [`margin-right-${marginRight}`] : marginRight,
        [`margin-left-${marginLeft}`] : marginLeft,
        [`margin-bottom-${marginBottom}`] : marginBottom,
    });
    return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph; 