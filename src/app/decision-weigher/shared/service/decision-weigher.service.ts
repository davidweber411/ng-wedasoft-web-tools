import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecisionWeigherService {

  rebalanceWeightScale() {
    setTimeout(() => {
      const sumWeightLeft = this.calculateSumWeightsOfSurface('.weight-scale-surface-left');
      const sumWeightRight = this.calculateSumWeightsOfSurface('.weight-scale-surface-right');

      this.rebalanceWeightScaleHeader(sumWeightLeft, sumWeightRight);
      this.rebalanceWeightScaleSurfaces(sumWeightLeft, sumWeightRight);
    }, 250);
  }

  private rebalanceWeightScaleHeader(sumWeightLeft: number, sumWeightRight: number) {
    const weightScaleHeader = document.querySelector(
      '.decision-weigher-weight-scale .weight-scale-header') as HTMLDivElement;
    if (sumWeightLeft === sumWeightRight) {
      weightScaleHeader.style.transform = 'unset';
    } else if (sumWeightLeft > sumWeightRight) {
      weightScaleHeader.style.transform = 'rotateZ(-12deg)';
    } else {
      weightScaleHeader.style.transform = 'rotateZ(12deg)';
    }
  }

  private rebalanceWeightScaleSurfaces(sumWeightLeft: number, sumWeightRight: number) {
    const weightScaleSurfaces = document.querySelectorAll(
      '.weight-scale-surface-left, .weight-scale-surface-right') as NodeListOf<HTMLDivElement>;
    if (sumWeightLeft === sumWeightRight) {
      weightScaleSurfaces.forEach(div => div.style.transform = 'unset');
    } else if (sumWeightLeft > sumWeightRight) {
      weightScaleSurfaces.forEach(div => div.style.transform = 'rotateZ(12deg)');
    } else {
      weightScaleSurfaces.forEach(div => div.style.transform = 'rotateZ(-12deg)');
    }
  }

  private calculateSumWeightsOfSurface(weightScaleSurfaceCssClass: string) {
    let sum: number = 0;
    const allWeights = document.querySelectorAll(
      weightScaleSurfaceCssClass + ' .weight-scale-dropzone .dwDragDropElement') as NodeListOf<HTMLDivElement>;
    allWeights.forEach(div => {
      sum += div.textContent !== null ? Number(div.textContent) : 0;
    });
    return sum;
  }

}
