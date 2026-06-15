
/*
2026-04-11
nextjs에서 라우트에서 정보를 받으면 다음과 같이 전달 받음
app/
  [username]/
    page.tsx
root/dave
{
    params: {
        username: dave
    }
}
이에 대한 타입을 지정해주기 위해 아래와 같이 함
구조분해 후 타입 지정
*/
export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
    // const data = await fetchSomething(params.username);
    const { username } = await params;

    return (
        <div>
            {/* 가로 최대, h 64px, 배경 빨강 명도(default 500) / 또는 bg-[#ff0000   ] */}
            <div id="topHeader" className="w-full h-[64px] bg-red-500"></div>
            <div id="subSection" className="w-full h-[300px] bg-orange-500"></div>
            <div id="mainSection" className="w-full h-[600px] flex">
                <div id="leftSection" className="basis-1/5 bg-yellow-500"></div>
                <div id="rightSection" className="basis-4/5 bg-blue-500"></div>
            </div>
            <div id="footer" className="w-full h-[64px] bg-green-500"></div>
        </div>
    )
}