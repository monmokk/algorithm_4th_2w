function solution(phone_number) {
    return phone_number.toString().slice(0, -4).replaceAll(/[0-9]/g, "*") + phone_number.toString().slice(-4)

}

function ruleSolution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}