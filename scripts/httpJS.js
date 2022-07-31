function padZero(time) {
    if (time.toString().length == 1){
        return '0' + time;
    }else{
        return time;
    }
}

window.addEventListener('DOMContentLoaded', function(e) {
    document.getElementById('postBtn').addEventListener('click', postFunc);
    document.getElementById('getBtn').addEventListener('click', getFunc);
    document.getElementById('putBtn').addEventListener('click', putFunc);
    document.getElementById('deleteBtn').addEventListener('click', deleteFunc);
});

async function postFunc() {
    let form = document.getElementById('inputForm');
    let date = document.getElementById('article_date');
    let option = document.getElementById('apiOpt');
    let currentTime = new Date();
        // convert dateObject into datetime-local format
        //currentTime = `${currentTime.getFullYear()}-${padZero(currentTime.getMonth())}-${padZero(currentTime.getDate())}T${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
        date.value = currentTime;
        let method = 'POST';
        let endpoint = 'https://httpbin.org/post';
        let payload = new FormData(form);

    if (option.value == 'fetch') {
        let request = await fetch(endpoint, {
            method: method,
            body: payload
        });
        document.getElementById('response').value = await request.text();
    }else{
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.open(method, endpoint, true);
            xhr.onload = function () {
                document.getElementById('response').value = xhr.responseText;
            }
        }
        xhr.send(payload);
    } 
};

async function getFunc() {
    let form = document.getElementById('inputForm');
    let date = document.getElementById('article_date');
    let option = document.getElementById('apiOpt');
    let currentTime = new Date();
    // convert dateObject into datetime-local format
    // currentTime = `${currentTime.getFullYear()}-${padZero(currentTime.getMonth())}-${padZero(currentTime.getDate())}T${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    date.value = currentTime;
    let method = 'GET';
    let endpoint = 'https://httpbin.org/get';
    let payload = new FormData(form);
    payload = new URLSearchParams(payload);
    endpoint = `${endpoint}?${payload}`;
    if (option.value == 'fetch') {
        let request = await fetch(endpoint, {
            method: method,
        });
        document.getElementById('response').value = await request.text();
    }else{
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.open(method, endpoint, true);
            xhr.onload = function () {
                document.getElementById('response').value = xhr.responseText;
            }
        }
        xhr.send(payload);
    } 
};

async function putFunc() {
    let form = document.getElementById('inputForm');
    let date = document.getElementById('article_date');
    let option = document.getElementById('apiOpt');
    let currentTime = new Date();
    // convert dateObject into datetime-local format
    //currentTime = `${currentTime.getFullYear()}-${padZero(currentTime.getMonth())}-${padZero(currentTime.getDate())}T${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    date.value = currentTime;
    let method = 'PUT';
    let endpoint = 'https://httpbin.org/put';
    let payload = new FormData(form);

    if (option.value == 'fetch') {
        let request = await fetch(endpoint, {
            method: method,
            body: payload
        });
        document.getElementById('response').value = await request.text();
    }else{
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.open(method, endpoint, true);
            xhr.onload = function () {
                document.getElementById('response').value = xhr.responseText;
            }
        }
        xhr.send(payload);
    } 
};

async function deleteFunc() {
    let date = document.getElementById('article_date');
    let option = document.getElementById('apiOpt');
    let currentTime = new Date();
    // convert dateObject into datetime-local format
    //currentTime = `${currentTime.getFullYear()}-${padZero(currentTime.getMonth())}-${padZero(currentTime.getDate())}T${padZero(currentTime.getHours())}:${padZero(currentTime.getMinutes())}`;
    date.value = currentTime;
    let method = 'DELETE';
    let endpoint = 'https://httpbin.org/delete';

    if (option.value == 'fetch') {
        let request = await fetch(endpoint, {
            method: method,
        });
        document.getElementById('response').value = await request.text();
    }else{
        let xhr = new XMLHttpRequest();
        if (xhr) {
            xhr.open(method, endpoint, true);
            xhr.onload = function () {
                document.getElementById('response').value = xhr.responseText;
            }
        }
    } 
};