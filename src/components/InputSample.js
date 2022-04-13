import React , {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "", 
        nickname: ""
    });
    const nameInput = useRef();
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
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" value={name} onChange={onChange} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>사용자 정보: </b>
                {name}({nickname})
            </div>
        </div>
    )
}

export default InputSample;