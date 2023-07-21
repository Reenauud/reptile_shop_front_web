import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
mutation CreateUser($password: String!, $email: String!){
  createUser(password: $password, email: $email) {
    email
  }
}`;

export const GET_TOKEN = gql`
mutation GetToken($email: String!, $password: String!) {
  getToken(email: $email, password: $password)
}`;

export const VERIFY_TOKEN = gql`
mutation Mutation($token: String!) {
  verifyToken(token: $token) {
    id
    email
  }
}`;

export const CREATE_PAYMENT_SESSION = gql`
mutation CretePaymentSession($amount: Float!) {
    createPaymentSession(amount: $amount) {
        customer
        ephemeralKey
        paymentIntent
        publishableKey
    }
}`;