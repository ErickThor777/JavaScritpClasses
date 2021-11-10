const school = [{
        name: 'juan',
        nota: 23,
        clase: '1c'
    },
    {
        name: 'Pedro',
        nota: 80,
        clase: '1a'
    },
    {
        name: 'Maria',
        nota: 12,
        clase: '1b'
    },
    {
        name: 'jauwan',
        nota: 99,
        clase: '1b'
    },
    {
        name: 'juawn',
        nota: 53,
        clase: '1a'
    },
    {
        name: 'Pedro',
        nota: 80,
        clase: '1a'
    },
    {
        name: 'Masria',
        nota: 12,
        clase: '1c'
    },
    {
        name: 'jausan',
        nota: 99,
        clase: '1b'
    },
    {
        name: 'jausan',
        nota: 1,
        clase: '1d'
    },
    {
        name: 'jausan',
        nota: 1,
        clase: '1g'
    }

];


// me saque sun array que contenga los mejosres alumnos de cada clase

let mejorAlumnoA;
let mejorAlumnoB;
let mejorAlumnoC;

// school.forEach(alunno => {
//   if (alunno.clase === '1c') {
//     mejorAlumnoC = mejorAlumnoC && mejorAlumnoC.nota > alunno.nota ? mejorAlumnoC : alunno;
//   }
//   if (alunno.clase === '1a') {
//     mejorAlumnoA = mejorAlumnoA && mejorAlumnoA.nota > alunno.nota ? mejorAlumnoA : alunno;
//   }
//   if (alunno.clase === '1b') {
//     mejorAlumnoB = mejorAlumnoB && mejorAlumnoB.nota > alunno.nota ? mejorAlumnoB : alunno;
//   }
// });

// const mejoresAlunos = [mejorAlumnoA, mejorAlumnoB, mejorAlumnoC];
// console.log(mejoresAlunos);

const getBestStudents = (prev, next) => {
    const alumno = prev.filter(alumno => alumno.clase === next.clase);
    if (alumno.length === 0) {
        prev.push(next);
    } else {
        alumno[0].nota = alumno[0].nota > next.nota ? alumno[0].nota : next.nota;
    }
    return prev;
};

bestAlumnos = school.reduce(getBestStudents, []);

console.log(bestAlumnos);


// [prev]
// [school]
// [{
//   name: 'juan',
//   nota: 23,
//   clase: '1c'
// }]   



// [{
//   name: 'jausan',
//   nota: 1,
//   clase: '1d'
// }] <--- alumno[0].nota = 
// []
// []
// []