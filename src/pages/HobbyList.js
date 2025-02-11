import HobbyItem from "../components/HobbyItem"

function HobbyList(){
    // 컴포넌트 파일로 분리해서 적용
    function hItem(value, isChecked){
        return(
            <li>{value}{isChecked && 'v'}</li>
        )
    }




    return(
        <div>
            <h3>취미 리스트</h3>
            <ul>
                {hItem("등산",true)}
                {hItem("드라마보기")}
                {hItem("게임")}
                {hItem("요리")}
                <HobbyItem value={"등산"} isChecked ={true}/>
                <HobbyItem value={"드라마보기"}/>
                <HobbyItem value={"게임"} />
                <HobbyItem value={"요리"} />

            </ul>
        </div>
    );
}

export default HobbyList;