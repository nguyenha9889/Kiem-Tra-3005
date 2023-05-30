// Khởi tạo mảng 2 chiều sinh viên và nhập 5 sinh viên
const arrStudents = [];
const student = [];
let codeStudent, fullName, age, mark_html, mark_css, mark_js, avgMark, rank;
for (let j = 0; j < 5; j++) {
      codeStudent = prompt(
            "Nhập mã sinh viên (5 ký tự và bắt đầu bằng chữ S): "
      );
      while (!(codeStudent.length == 5 && codeStudent.startsWith("S"))) {
            codeStudent = prompt(
                  "Mã sinh viên chưa đúng định dạng. Vui lòng nhập lại: "
            );
      }

      fullName = prompt("Nhập tên sinh viên (từ 6 đến 30 ký tự): ");
      while (!(fullName.length >= 6 && fullName.length <= 30)) {
            fullName = prompt(" Quá ký tự cho phép. Vui lòng nhập lại: ");
      }

      age = Number(prompt("Vui lòng nhập tuổi: "));
      while (!(age >= 18 && age <= 30)) {
            age = prompt(" Quá ký tự cho phép. Vui lòng nhập lại: ");
      }

      mark_html = parseFloat(
            prompt("Vui lòng nhập điểm môn HTML (Ví dụ: 7.5): ")
      );
      while (!(mark_html >= 0 && mark_html <= 10)) {
            mark_html = prompt(" Điểm chưa đúng. Vui lòng nhập lại ");
      }
      mark_css = parseFloat(
            prompt("Vui lòng nhập điểm môn CSS (Ví dụ: 7.5): ")
      );
      while (!(mark_css >= 0 && mark_css <= 10)) {
            mark_css = prompt(" Điểm chưa đúng. Vui lòng nhập lại ");
      }
      mark_js = parseFloat(prompt("Vui lòng nhập điểm môn JS (Ví dụ: 7.5): "));
      while (!(mark_js >= 0 && mark_js <= 10)) {
            mark_js = prompt(" Điểm chưa đúng. Vui lòng nhập lại ");
      }

      avgMark = "" ;
      rank = "";
      student.push(codeStudent,
            fullName,
            age,
            mark_html,
            mark_css,
            mark_js,
            avgMark,
            rank)
}

arrStudents.push(student);
console.log(arrStudents.toString());

// Tính điểm trung bình và xếp loại
for (let j = 0; j < student.length - 1; j++) {
      avgMark[j] =
            (mark_html[j] + mark_css[j] + mark_js[j]) / 3;
      if (avgMark[j] < 5) rank[j] = "Yếu";
      else if (avgMark[j] < 7) rank[j] = "Trung Bình";
      else if (avgMark[j] < 8) rank[j] = "Khá";
      else if (avgMark[j] < 9) rank[j] = "Giỏi";
      else rank[j] = "Xuất sắc";
      console.log(`Diem trung binh ${avgMark[j]} Xep loai ${rank[j]}`);
}
