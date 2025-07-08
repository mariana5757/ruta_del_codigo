import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLevelsComponent } from '../../atoms/card-levels/card-levels.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [CommonModule, CardLevelsComponent],
  standalone: true,
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  levels = [
    {
      id: 0,
      name: 'Trainee',
      icon: 'seed.png',
      description:
        'Primeros pasos. Aprendes los fundamentos y te introduces al ecosistema frontend.',
    },
    {
      id: 1,
      name: 'Junior',
      icon: 'junior.png',
      description: 'Ya puedes construir. Escribes código funcional y entiendes cómo trabajar en equipo.',
    },
    {
      id: 2,
      name: 'Advanced',
      icon: 'advanced.png',
      description: 'Dominas herramientas y patrones. Optimización, buenas prácticas y autonomía.',
    },
    {
      id: 3,
      name: 'Senior',
      icon: 'senior.png',
      description: 'Diseñas soluciones, lideras decisiones técnicas y apoyas al equipo',
    },
    {
      id: 4,
      name: 'Master',
      icon: 'master.png',
      description: 'Influencia estratégica. Innovas, inspiras y haces crecer a otros.',
    },
  ];

  constructor(private router: Router) {}


  get levelGroups() {
    const groups = [];
    for (let i = 0; i < this.levels.length; i += 2) {
      groups.push(this.levels.slice(i, i + 2));
    }
    return groups;
  }

  /**
   * Función encargada de recibir el evento del nivel seleccionado
   */
  goToLevel(event: number) {
    switch (event){
      case 0:
        this.router.navigate(['/trainee']);
        break;
      default:
        break;
    }

  }
}
