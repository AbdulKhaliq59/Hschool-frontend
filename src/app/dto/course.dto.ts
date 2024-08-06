export interface Course {
    courseName: string;
    progress: number;
    lessonNumber: number;
}

export interface CreateCourseInput {
    name: string;
    author: string;
    lessons_count: number;
}