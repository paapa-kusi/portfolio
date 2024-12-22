import React from 'react';

const Coursework = () => {
  return (
    <div className="w-full text-white text-center -my-20">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold">Relevant Coursework</div>
      <div className="text-lg text-slate-400 font-bold mt-2">As of Spring 2025</div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4 text-lg">
        {/* Header Row */}
        <div className="hidden sm:block font-bold">#</div>
        <div className="font-bold col-span-2 sm:col-span-3">Course</div>
        <div className="hidden sm:block font-bold">Semester</div>

        {/* Courses */}
        {[
          { id: 1, code: "COP 3502", name: "Programming Fundamentals I", semester: "Spring 2024" },
          { id: 2, code: "COP 3503", name: "Programming Fundamentals II", semester: "Summer 2024" },
          { id: 3, code: "COT 3100", name: "Applications of Discrete Structures", semester: "Summer 2024" },
          { id: 4, code: "EIN 3354", name: "Engineering Economy", semester: "Summer 2024" },
          { id: 5, code: "EME 2040", name: "Intro to Educational Technology", semester: "Summer 2024" },
          { id: 6, code: "COP 3530", name: "Data Structures and Algorithms", semester: "Fall 2024" },
          { id: 7, code: "STA 3032", name: "Engineering Statistics", semester: "Fall 2024" },
          { id: 8, code: "CIS 4930", name: "Enterprise Software Engineering", semester: "Fall 2024" },
          { id: 9, code: "EME 3319", name: "Design and Development of Educational Multimedia", semester: "Fall 2024" },
          { id: 10, code: "CDA 3101", name: "Intro to Computer Organization", semester: "Spring 2025" },
          { id: 11, code: "CEN 3031", name: "Intro to Software Engineering", semester: "Spring 2025" },
          { id: 12, code: "EEL 3872", name: "Artificial Intelligence Fundamentals", semester: "Spring 2025" },
          { id: 13, code: "EEL 5840", name: "Fundamentals of Machine Learning", semester: "Spring 2025" },
          { id: 14, code: "EME 3813", name: "Technology-Enhanced Learning Environments", semester: "Spring 2025" },
          { id: 15, code: "MAS 3114", name: "Computational Linear Algebra", semester: "Spring 2025" },
        ].map((course) => (
          <React.Fragment key={course.id}>
            <div className="hidden sm:block text-neutral-50">{course.id}</div>
            <div className="col-span-2 sm:col-span-3">
              <span className="text-white font-bold">{course.code}</span>
              <div className="text-slate-400">{course.name}</div>
            </div>
            <div className="hidden sm:block text-neutral-50">{course.semester}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
