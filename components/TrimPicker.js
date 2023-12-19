import FormGroup from './FormGroup';
import Heading from './Heading';
import Label from './Label';
import Select from './Select';
import styles from './trimpicker.module.scss';

const TrimPicker = ({ trims }) => {
    //create an array of objects 
    //each object has a value and a label
    const trimOptions = trims.map((trim) => {
        const { name } = trim; 
        return {
            label: name, 
            value: name.toLowerCase().replace(' ', '-')
        }
    });

    return <section className={styles.trimpicker}>
        <div classNames={styles.trimpicker__text}>
            <Heading 
                level={2} 
                color="white"
                marginBottom={2}
            >
                Picture Yourself Behind the Wheel
            </Heading>
            <form>
                <FormGroup>
                    <Label>I want to drive a...</Label>
                    <Select options={trimOptions}/>
                </FormGroup>
                <FormGroup>
                    <Label>Change the driving location to...</Label>
                    <Select />
                </FormGroup>
            </form>
        </div>
        <div className={trimpicker__images}>
            images
        </div>
    </section>
}
export default TrimPicker; 