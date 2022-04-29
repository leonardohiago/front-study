import Header from '../../components/Header';
import { Title, CourseList, Course } from './styles';

const courses = [
  {
    number: '01',
    title: 'Conceitos da Web',
    description: 'Aqui você aprenderá toda a base de funcionamento da web, protocolos e etc.'
  },
  {
    number: '02',
    title: 'HTML',
    description: 'Aqui você aprenderá a criação de páginas web, por meio da linguagem de marcação HTML.'
  },
  {
    number: '03',
    title: 'CSS',
    description: 'Aqui você aprenderá como utilizar os principais recursos do CSS para deixar sua página web mais elegante.'
  },
  {
    number: '04',
    title: 'Javascript',
    description: 'Aqui você aprenderá o funcionamento e como utilizar a linguagem a linguagem mais popular do mercado.'
  },
  {
    number: '05',
    title: 'React',
    description: 'Aqui você aprenderá a criar aplicações com React do zero, da forma correta e moderna.'
  }
];

const subtitle = 'Siga o passo a passo das aulas para se tornar um desenvolvedor de sucesso. Lembre-se que é recomendado seguir a ordem listada abaixo.';

export default function Courses() {
  return (
    <>
      <Header />
      <Title>
        <h2>Olá, [NOME DO USUÁRIO].</h2>
        <h2>seja bem-vindo(a).</h2>
        <p>{subtitle}</p>
      </Title>
      <CourseList>
        <h2>Cursos Disponíveis</h2>
        {courses.map((course) => (
          <Course
            key={course.number}
          >
            <div className="title">
              <h3 className="number">{course.number}</h3>
              <p className="text">{course.title}</p>
            </div>
            <div className="description">
              <p>{course.description}</p>
            </div>
          </Course>
        ))}
      </CourseList>
    </>
  );
}
