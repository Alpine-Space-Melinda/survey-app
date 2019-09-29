// Mapping between the survey and the underlying LimeSurvey survey
import * as mappingDefault from "./mapping-default";

export const mappings = new Map<String, Map<string, {
    gid: number,
    qid: number,
    answers?: Map<string, string>
}>>();

mappings.set('default', mappingDefault.mapping);

//mappings.set('at', mappingAT.mapping);
//mappings.set('de', mappingDE.mapping);
//mappings.set('fl', mappingFL.mapping);
//mappings.set('fr', mappingFL.mapping);
//mappings.set('it', mappingIT.mapping);
//mappings.set('slo', mappingSLO.mapping);
//mappings.set('ch', mappingCH.mapping);