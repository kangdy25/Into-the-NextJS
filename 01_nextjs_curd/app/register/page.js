export default function Register() {
    return (
        <div>
            <form method="POST" action="/api/auth/signup">
                <input name="name" type="text" placeholder="이름" /> 
                <input name="email" type="text" placeholder="이메일" />
                <input name="password" type="password" placeholder="비번" />
                <select 
                    name="level"
                    style={{display: "block", margin: "10px 0px", width: "163px", padding: "5px"}}
                >
                    <option value="">레벨</option>
                    <option value="member">일반 회원</option>
                    <option value="admin">관리자</option>
                </select>
                <button type="submit">id/pw 가입요청</button>
            </form>
        </div>
    )
}