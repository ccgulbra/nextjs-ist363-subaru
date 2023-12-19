import styles from './select.module.scss';

const Select = () => {
    return <select className={styles.select}>select goes here
        {options?.map((option, index) => {
            const { label, value } = option; 
            return <option value={value}>{label}</option>
        })}
    </select>
}
export default Select; 