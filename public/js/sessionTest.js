let sessionData = sessionStorage.getItem('login');
test()

function test(){
    if(!sessionData){
        alert('로그인 후 이용해주세요!');
        window.location.href="/login";
    }
}
