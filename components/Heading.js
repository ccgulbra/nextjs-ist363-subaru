import classnames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classnames.bind(styles);

const Heading = ({ children, color, level, textAlign, marginBottom, marginTop, marginLeft, marginRight, paddingTop, paddingRight, paddingLeft, paddingBottom } ) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;
    
    const headingClasses = cx({
        heading: true, 
        [`heading${level}`] : level, 
        [`font-color-${color}`] : color,

        [`margin-top-${marginTop}`] : marginTop,
        [`margin-right-${marginRight}`] : marginRight,
        [`margin-left-${marginLeft}`] : marginLeft,
        [`margin-bottom-${marginBottom}`] : marginBottom,

        [`padding-top-${paddingTop}`] : paddingTop,
        [`padding-right-${paddingRight}`] : paddingRight,
        [`padding-left-${paddingLeft}`] : paddingLeft,
        [`padding-bottom-${paddingBottom}`] : paddingBottom,

        [`text-align-${textAlign}`] : textAlign

    });

    return <Tag className={headingClasses}>{children}</Tag>
}
export default Heading; 