class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getHeight(){
        return this.height;
    }
    setHeight(height){
        this.height = height;
    }
    setWidth(width){
        this.width = width;
    }
    getArea(){
        return this.width*this.height;
    }

    getPerimeter(){
        return (this.height+this.width)*2;
    }

}
let rectangle = new Rectangle(110,130);
let width = rectangle.getWidth();
let height = rectangle.getHeight();
const canvas = document.getElementById('drawRec'); // truy cập canvas bằng getElementById
const ctx = canvas.getContext('2d'); //Phương thức getContext() trả về một đối tượng có các công cụ
                                              // (thuộc tính và phương thức) để vẽ
ctx.fillStyle = '#ce3f3f'; // fillstyle: tô màu
ctx.fillRect(0, 0, width, height); // ve hinh chu nhat x,y la toa do