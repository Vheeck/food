var pos

function caurosel(id, which) {
    if (pos == 1) {
    }
    else if (pos == 2) {
    } 
    else if (pos == 3) {
    } 
    else {
        pos = 1
    }

    if (id == 1) {
        document.querySelector('#caurosel-content' + pos).style = 'margin-left: -100%;';

        setTimeout(() => {
            document.querySelector('#caurosel-content1').style = 'display: block;';
            document.querySelector('#caurosel-content2').style = 'display: none;';
            document.querySelector('#caurosel-content3').style = 'display: none;';
        }, 1000);

        pos = id;

        document.querySelector('#pg1').className = 'pg active';
        document.querySelector('#pg2').className = 'pg';
        document.querySelector('#pg3').className = 'pg';

    }
    else if (id == 2) {
        document.querySelector('#caurosel-content' + pos).style = 'margin-left: -100%;';

        setTimeout(() => {
            document.querySelector('#caurosel-content1').style = 'display: none;';
            document.querySelector('#caurosel-content2').style = 'display: block;';
            document.querySelector('#caurosel-content3').style = 'display: none;';
        }, 1000);
        
        pos = id

        document.querySelector('#pg1').className = 'pg';
        document.querySelector('#pg2').className = 'pg active';
        document.querySelector('#pg3').className = 'pg';

    }
    else if (id == 3) {
        document.querySelector('#caurosel-content' + pos).style = 'margin-left: -100%;';

        setTimeout(() => {
            document.querySelector('#caurosel-content1').style = 'display: none;';
            document.querySelector('#caurosel-content2').style = 'display: none;';
            document.querySelector('#caurosel-content3').style = 'display: block;';
        }, 1000);

        pos = id

        document.querySelector('#pg1').className = 'pg';
        document.querySelector('#pg2').className = 'pg';
        document.querySelector('#pg3').className = 'pg active';

    }
    else{}

    if (which == 1) {
       
        return  startcaro(id, 0);
    }
    else{
        return  startcaro(id, 1);
    }

}

var send

function startcaro(id, which) {

    if (which == 0) {
        if (id == 3) {
            send = 1;
        }
        else{
            send = id + 1
        }
    
        setTimeout(() => {
    
            return caurosel(send, 1)
    
        }, 10000);    
    }
    else if (which == 1) {
        if (id == 3) {
            send = 1;
        }
        else{
            send = id + 1
        }
    }
    
}

var imgsrc = [
    'none',
    'assets/img/cust3.png',
    'assets/img/cust2.png',
    'assets/img/cust1.png',
    'assets/img/cust4.png',
    'assets/img/cust5.png',
    'assets/img/cust6.png',
    'assets/img/cust7.png',
    'assets/img/cust8.png',
    'assets/img/cust9.png',
    'assets/img/cust10.png',
]

var custimg = [
    'none',
    document.querySelector('#custimg1'),
    document.querySelector('#custimg2'),
    document.querySelector('#custimg3'),
    document.querySelector('#custimg4'),
    document.querySelector('#custimg5')
]

var where = 0;

function imgcaurosel(dir) {
    if (dir == 0) {
        // alert('left');
        if (where + 5 == imgsrc.length - 1) {
        }
        else {
            document.querySelector('#custimg1').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg2').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg3').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg4').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg5').style = 'opacity: 0; transition: 400ms;';

            setTimeout(() => {
                where = where + 1;

                document.querySelector('#custimg1').src = imgsrc[where + 1];
                document.querySelector('#custimg2').src = imgsrc[where + 2];
                document.querySelector('#custimg3').src = imgsrc[where + 3];
                document.querySelector('#custimg4').src = imgsrc[where + 4];
                document.querySelector('#custimg5').src = imgsrc[where + 5];

            }, 200);

            setTimeout(() => {
            document.querySelector('#custimg1').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg2').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg3').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg4').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg5').style = 'opacity: 1; transition: 400ms;';
            }, 300);
        }
    }
    else if (dir == 1) {
        // alert('right');
        if (where + 1 == 1) {
        }
        else {
            document.querySelector('#custimg1').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg2').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg3').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg4').style = 'opacity: 0; transition: 400ms;';
            document.querySelector('#custimg5').style = 'opacity: 0; transition: 400ms;';

            setTimeout(() => {
                where = where - 1;

                document.querySelector('#custimg1').src = imgsrc[where + 1];
                document.querySelector('#custimg2').src = imgsrc[where + 2];
                document.querySelector('#custimg3').src = imgsrc[where + 3];
                document.querySelector('#custimg4').src = imgsrc[where + 4];
                document.querySelector('#custimg5').src = imgsrc[where + 5];
            }, 200);

            setTimeout(() => {
            document.querySelector('#custimg1').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg2').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg3').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg4').style = 'opacity: 1; transition: 400ms;';
            document.querySelector('#custimg5').style = 'opacity: 1; transition: 400ms;';
            }, 300);
        }
    }
    else{}
}