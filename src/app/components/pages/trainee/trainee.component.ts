import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { VersioningTraineeComponent } from "../../molecules/trainee/versioning-trainee/versioning-trainee.component";
import { GraphicStylesTraineeComponent } from "../../molecules/trainee/graphic-styles-trainee/graphic-styles-trainee.component";
import { FrameworksTraineeComponent } from "../../molecules/trainee/frameworks-trainee/frameworks-trainee.component";
import { ProgrammingLogicTraineeComponent } from "../../molecules/trainee/programming-logic-trainee/programming-logic-trainee.component";
import { PersistenceTraineeComponent } from '../../molecules/trainee/persistence-trainee/persistence-trainee.component';
import { CodingTraineeComponent } from '../../molecules/trainee/coding-trainee/coding-trainee.component';
import { SoftwarePrinciplesTraineeComponent } from '../../molecules/trainee/software-principles-trainee/software-principles-trainee.component';

@Component({
  selector: 'app-trainee',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent {

temas = [
    {
      id:1,
      titulo: '🌱 Versionamiento',
      queEs: 'Controlar y rastrear cambios en el código con herramientas como Git.',
      comoEstudiarlo: 'Aprende comandos básicos como git init, git add, commit, push y ramas.'
    },
    {
      id:2,
      titulo: '🎨 Estilos gráficos UI',
      queEs: 'Define cómo se ve tu aplicación: tipografías, colores, espaciado.',
      comoEstudiarlo: 'Practica CSS, explora Figma y estudia buenas prácticas de diseño visual.'
    },
    {
      id:3,
      titulo: '🧩 Frameworks, librerías y otros',
      queEs: 'Herramientas que ayudan a construir interfaces y funcionalidades más rápido.',
      comoEstudiarlo: 'Conoce Angular, Bootstrap o Tailwind desde ejemplos simples.'
    },
    {
      id:4,
      titulo: '🧠 Lógica de programación',
      queEs: 'Condicionales, bucles, funciones: cómo piensas para resolver problemas.',
      comoEstudiarlo: 'Haz ejercicios en JavaScript que involucren lógica y estructuras básicas.'
    },
    {
      id:5,
      titulo: '🔌 Comunicación y persistencia',
      queEs: 'Cómo se comunica tu app con APIs y guarda datos localmente.',
      comoEstudiarlo: 'Aprende fetch, JSON, y el uso de localStorage o sessionStorage.'
    },
    {
      id:6,
      titulo: '💻 Codificación',
      queEs: 'Escribir código limpio, funcional y entendible.',
      comoEstudiarlo: 'Practica buenas prácticas como indentación, comentarios y funciones claras.'
    },
    {
      id:7,
      titulo: '📐 Principios de software',
      queEs: 'Ideas clave para que tu código sea mantenible (DRY, KISS, modularidad).',
      comoEstudiarlo: 'Lee sobre principios básicos y aplícalos en ejercicios pequeños.'
    }
  ];
  
  expandedIndex: number | null = null;

  componentMap: Record<number, any> = {
    1: VersioningTraineeComponent,
    2: GraphicStylesTraineeComponent,
    3: FrameworksTraineeComponent,
    4: ProgrammingLogicTraineeComponent,
    5: PersistenceTraineeComponent,
    6: CodingTraineeComponent,
    7: SoftwarePrinciplesTraineeComponent
  };

  constructor(private router: Router) {}

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  getComponentById(id: number) {
    return this.componentMap[id];
  }
}