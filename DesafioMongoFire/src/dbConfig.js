import dotenv from 'dotenv'
dotenv.config()
const { firebaseKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

export default {
    mongodb: {
        connectionString: process.env.MONGO_CONNECTION_STRING
    },
    firebase: {
        "type": "service_account",
        "project_id": "coderback-1f063",
        "private_key_id": "ea0128ebec90a20979a89806fa682e17d7d0f12c",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCptLzyx1RfFqEv\nlxYQfO5bmuf2pPaQiSVoQ1406MJdr4STcQizEtgZ03dmcKlGdz6WdQGXwSG/OF1w\nichW0oTfSZq29gR5yoR4HzyAa0g5EwOWiEFDjO46LMCp5f5vs+8ghyf846EgOIZg\nNTLZXFyzjpVJiokjAxbDafESQv0WD7Cn+HnHXUSctY+XG9LAC9lFpocEI0dWRafI\naatwT8yNoTIhRQmlxU5LK27fOKqhZ/8pL8uxENzsJJ7UwphYXXF46lHqkeUSHdXb\nsz47tWShQfNG/ifG2PlgDs21+jTJpYaBwtEOygKmDvrhBr3NMeo3y0Isft0z0OOw\nACSeQP7JAgMBAAECggEABbLizHFKoUXQhFlZvZSAaZWWWAc6m2hrl+h5O6QcUMqR\n1GStktvdY2KhRhCe8pWTBbjopIixAiuZoauSzW2U1i2x0xaIWHGnSKRd4v8XRglg\nK7goHuVW45+4mYv2Yxhi/Y/kVR7svHkBdC4dJsTt/P6a/0T2bXVPWKEQXhlfR9QR\na2CZ0VfZBPEbR0QCFh+2YRYH8fC2Sh8HafwKCLtTTDlTWQWJRvUIdqTGDoiqb4gn\nDBLBefCHEpNokxcBm1TEHBSZXcuRa62gp6XBs1USETThcMmRvkRA+nfk+wExq3+2\nn7LXisODYcHWqbxOa47lNAmb9kdmMLjzzYwRqA1z4QKBgQDvkPyqIUTdMntjAvPl\n7xkh87bxuEKDmZn7D0pvkZ/T0akDoWUmcJzpjArNAx3WwWitv0nW4CFQlfmUFcG2\nWKiUXf/rOLTP5Fw6gYcxvUYTVLoW0CZ/ttpdtqpVZfihWO8HXhR+Jc+DW93lNnns\nNfy2W6T8tZByfpUZM7yVfnM58QKBgQC1WO/df3TeUpHbV19XcNvbqmkjXELqUVqQ\nTzbnVDhUN6L3St+XTpi+HvrcoDN96uvpbD9nV+3joC50vxxBFWL6fqsRpSmvoNpu\nrlBNKOBHpBIQ6CQMeBrYpdSN2B0uvUv1bAnXxNML5OCCrqdwVJrPbAj1L1mc6qr2\n80c6iuV6WQKBgFhfs9VO0IiIxtuPi0mXGj5cGXCx+FdzoknrKhpeLgeFoEOmlhnI\nERpWfuWB8M/4KRVvK14I8EE6Egd+vyb1LbsNsgqjsI/APgWXIrhGikM3Ti58OreC\nTKulZtB5/W4H0KV3Hzgp2pMqoICdx/xLLh5XUFWo5NBXwci6PScornkBAoGAGjq1\n3tybg7h/njEB+jy5oAkC0fl7ODbyGWNLtqPIze2KJahvtIvKrdz/Pb/yEqlS290r\nQoBGSSEW9w3ZQVSdj0uY5KF16RAj59RQiwh5gAMsFcPtytvoTiOWHbn/Zo48mU+6\nELpIKDU/f8dRMn8aMRwYI5ZoqLiMZ9GCIOaMEGkCgYBH2wuY8nBcPHWGQ7Au3+y6\nGkSfxjeSI0y/e0KHBUc/XzOnWXbNDnjNv1halU9PjLPO3Ear+9n8Usa1hNkA9utE\ntk7O7fPLOO5wSgKizApB3U2i9rj4lKNUJ0p90YPKKlKGjfedZCWdAmviyxid66lN\nCnUYM/2t5d6Jujt0xPFUkQ==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-a0q9r@coderback-1f063.iam.gserviceaccount.com",
        "client_id": "106618715652824205612",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a0q9r%40coderback-1f063.iam.gserviceaccount.com"
    }
}