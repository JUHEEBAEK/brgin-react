import React , {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: ""
    });
    const {name, nickname} = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        // react 객체를 업데이트 할 때 복사 해놔야함.
        const nextInputs = {
            ...inputs,
            [name]: value
        }
        setInputs(nextInputs);
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: ""
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" value={name} onChange={onChange} />
            <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;