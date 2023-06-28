export default async function Write() {
    return (
        <div>
            <div>
                <h4>글 내놔</h4>
                <form action="/api/list/" method="GET">
                    <button type="submit">버튼</button>
                </form>
            </div>
            <div>
                <h4>날짜 출력</h4>
                <form action="/api/time/" method="GET">
                    <button type="submit">버튼</button>
                </form>
            </div>
            <div className="p-20">
                <h4>글 작성 가즈아ㅏㅏ</h4>
                <form action="/api/content" method="POST">
                    <input name="title" placeholder="글제목"/>
                    <input name="content" placeholder="글내용"/>
                    <button type="submit">전송</button>
                </form>
            </div>
        </div>
    )
}