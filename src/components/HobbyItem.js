// 컴포넌트명은 Pascal 표기법 (대문자로 시작)
function HobbyItem({value, isChecked}) {
    
    return(
        <li>{value}{isChecked && 'v'}</li>
    )
   



}

export default HobbyItem;
















