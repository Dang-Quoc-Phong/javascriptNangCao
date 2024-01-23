// // 01-dom-intro
// // Đối tượng cửa sổ toàn cục
// console.log(window);

// // Đối tượng tài liệu là một phần của đối tượng cửa sổ
// console.dir(window.document);

// // Chúng ta có thể truy cập trực tiếp các phần tử DOM bằng các thuộc tính
// console.log(document.body);
// console.log(document.links[0]);

// // Chúng ta có thể thiết lập thuộc tính của các phần tử
// // document.body.innerHTML = '<h1>Xin chào từ body</h1>';

// // Đối tượng tài liệu có rất nhiều phương thức. Một là `document.write()`, nó sẽ ghi nội dung nào đó vào tài liệu
// document.write('Xin chào từ JS');

// // Chúng ta cũng có các phương thức để chọn phần tử một cách trực tiếp hơn
// document.getElementById('main').innerHTML = '<h1>Xin chào từ main</h1>';

// document.querySelector('#main h1').innerText = 'Xin chào';



// 02-kiểm tra-tài liệu-đối tượng-thuộc tính