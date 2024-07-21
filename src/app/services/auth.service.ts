import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { CreateUserDto, LoginDto } from "../dto/auth.dto";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private apollo: Apollo) { }

    //Signup functionality
    register(registerDto: CreateUserDto): Observable<any> {
        const REGISTER_MUTATION = gql`
            mutation Register($createUserData: CreateUserDto!) {
                register(createUserData: $createUserData) {
                    id
                    email
                    password
                    country
                    instructor
                }
            }
        `;

        return this.apollo.mutate({
            mutation: REGISTER_MUTATION,
            variables: {
                createUserData: registerDto,
            },
        });
    }
    // Login Functionality
    login(loginDto: LoginDto): Observable<any> {
        const LOGIN_MUTATION = gql`
        mutation Login($authInput: AuthInput!) {
        login(authInput: $authInput) {
        access_token
        }
      }
        `;
        return this.apollo.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
                authInput: loginDto
            }
        })
    }
}
