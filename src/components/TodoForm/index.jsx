import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    // chặn reload của trình duyệt
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;
        // chuẩn bị giá trị hiện tại của form để gửi lên thèn cha
        const formValues = {
            title: value,
        };
        onSubmit(formValues);

        // Reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text" value={value}
                onChange={handleValueChange}
            />

        </form>
    );
}

export default TodoForm;