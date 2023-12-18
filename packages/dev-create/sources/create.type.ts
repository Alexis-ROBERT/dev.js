export interface ICreateProjectConfig {
        projectType: AllProjectType | IsNotProjectType;
}

export type AngularType = 'angular';
export type EmberType = 'ember';
export type PolymerType = 'polymer';
export type ReactType = 'react';
export type VueType = 'vue';

export type AllProjectType = AngularType | AngularType | EmberType | PolymerType | ReactType | VueType;

export type IsNotProjectType = boolean;
