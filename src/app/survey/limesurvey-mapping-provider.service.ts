import { Injectable } from '@angular/core';
import { LimesurveyQuestionsMapping } from "./limesurvey-questions-mapping";

import { environment } from '../../environments/environment';
import { mappings } from './specs/mappings';

@Injectable({
  providedIn: 'root'
})
export class LimesurveyMappingProviderService {

  constructor() { }
  
  public getMapping(region: string): LimesurveyQuestionsMapping {
      let mapping = mappings.get(region) || mappings.get('default');
      let surveyId = environment.limesurvey.surveys.default;
      if (region in environment.limesurvey.surveys){
          surveyId = environment.limesurvey.surveys[region];
      }
      
      return new LimesurveyQuestionsMapping(surveyId, mapping);
  }
  
}
