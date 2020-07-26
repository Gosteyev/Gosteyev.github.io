import { Select } from './select/select';
import './select/styles.scss';

const select = new Select('select', {
    placeholder: "Select something",
    data: [
        {id: 1, value: 'React'},
        {id: 2, value: 'Vue'},
        {id: 3, value: 'Angular'},
        {id: 4, value: 'Node js'},
        {id: 5, value: 'Next'}
    ]
})

window.s = select;

