function validateBookInfoRegisteration() {
    if(document.getElementById('isbn').value === '') {
        alert('ISBN이 비워져 있습니다.');
        return false;
    }

    if(document.getElementById('title').value === '') {
        alert('제목이 비워져 있습니다.');
        return false;
    }

    if(document.getElementById('author').value === '') {
        alert('저자가 비워져 있습니다.');
        return false;
    }

    if(document.getElementById('publisher').value === '') {
        alert('출판사가 비워져 있습니다.');
        return false;
    }

    let pricePattern = /^[0-9]+$/;
    if(!document.getElementById('price').value.match(pricePattern)) {
        alert('값은 정수입니다.');
        return false;
    }

    return true;
}
