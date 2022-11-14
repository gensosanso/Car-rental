const tousLesBiens = [{
        "id": 1,
        "created_at": "2022-11-02T22:10:23.000000Z",
        "updated_at": "2022-11-02T22:10:23.000000Z",
        "name": "appartement fugazi plus",
        "price": "90000",
        "description": "petit appart chic",
        "active": 0,
        "vente": 0,
        "prix_vente": 120000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 1,
                    "caracteristic_id": 1,
                    "value": "500"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 1,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 1,
                    "caracteristic_id": 3,
                    "value": "1"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 1,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 1,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 2,
        "created_at": "2022-11-02T22:13:48.000000Z",
        "updated_at": "2022-11-02T22:13:48.000000Z",
        "name": "appartement fugazi plus",
        "price": "90000",
        "description": "petit appart chic",
        "active": 0,
        "vente": 0,
        "prix_vente": 120000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 2,
                    "caracteristic_id": 1,
                    "value": "500"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 2,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 2,
                    "caracteristic_id": 3,
                    "value": "1"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 2,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 2,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 3,
        "created_at": "2022-11-07T11:17:05.000000Z",
        "updated_at": "2022-11-07T11:17:05.000000Z",
        "name": "appartement marc antonito",
        "price": "90000",
        "description": "appart chic en plein coeur de la ville de douala",
        "active": 0,
        "vente": 1,
        "prix_vente": 120000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 1,
                    "value": "570"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 3,
                    "value": "1"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 3,
                    "caracteristic_id": 6,
                    "value": "carrefour omnisport  bepanda-omnisport"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 4,
        "created_at": "2022-11-07T11:18:04.000000Z",
        "updated_at": "2022-11-07T11:18:04.000000Z",
        "name": "appartement marc antonito",
        "price": "90000",
        "description": "appart chic en plein coeur de la ville de douala",
        "active": 0,
        "vente": 1,
        "prix_vente": 120000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 1,
                    "value": "570"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 3,
                    "value": "1"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 4,
                    "caracteristic_id": 6,
                    "value": "carrefour omnisport  bepanda-omnisport"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 9,
        "created_at": "2022-11-10T12:39:09.000000Z",
        "updated_at": "2022-11-10T12:39:09.000000Z",
        "name": "appartement kingship",
        "price": "90000",
        "description": "petit appart douillet en pleine ville",
        "active": 0,
        "vente": 0,
        "prix_vente": 120000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 1,
                    "value": "500"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 2,
                    "value": "3"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 3,
                    "value": "1"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 9,
                    "caracteristic_id": 6,
                    "value": "bepanda"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 10,
        "created_at": "2022-11-10T12:48:36.000000Z",
        "updated_at": "2022-11-10T12:48:36.000000Z",
        "name": "appartement haroldship",
        "price": "500000",
        "description": "appart style en cours de renovation",
        "active": 0,
        "vente": 0,
        "prix_vente": 700000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 10,
                    "caracteristic_id": 6,
                    "value": "carrefour omnisport  bepanda-omnisport"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 11,
        "created_at": "2022-11-10T12:50:15.000000Z",
        "updated_at": "2022-11-10T12:50:15.000000Z",
        "name": "appartement haroldship",
        "price": "500000",
        "description": "appart style en cours de renovation",
        "active": 0,
        "vente": 0,
        "prix_vente": 700000,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 11,
                    "caracteristic_id": 6,
                    "value": "carrefour omnisport  bepanda-omnisport"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 12,
        "created_at": "2022-11-10T13:04:08.000000Z",
        "updated_at": "2022-11-10T13:04:08.000000Z",
        "name": "appart pivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 12,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 13,
        "created_at": "2022-11-10T13:06:17.000000Z",
        "updated_at": "2022-11-10T13:06:17.000000Z",
        "name": "appart pivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 13,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 14,
        "created_at": "2022-11-10T13:09:08.000000Z",
        "updated_at": "2022-11-10T13:09:08.000000Z",
        "name": "appart pivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 14,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 15,
        "created_at": "2022-11-10T13:25:50.000000Z",
        "updated_at": "2022-11-10T13:25:50.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 15,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 16,
        "created_at": "2022-11-10T13:26:31.000000Z",
        "updated_at": "2022-11-10T13:26:31.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 16,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 17,
        "created_at": "2022-11-10T13:27:53.000000Z",
        "updated_at": "2022-11-10T13:27:53.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 18,
        "created_at": "2022-11-10T13:49:36.000000Z",
        "updated_at": "2022-11-10T13:49:36.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 18,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 19,
        "created_at": "2022-11-10T13:52:42.000000Z",
        "updated_at": "2022-11-10T13:52:42.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 19,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 20,
        "created_at": "2022-11-10T13:53:35.000000Z",
        "updated_at": "2022-11-10T13:53:35.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 20,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 21,
        "created_at": "2022-11-10T13:54:05.000000Z",
        "updated_at": "2022-11-10T13:54:05.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 21,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 22,
        "created_at": "2022-11-10T14:08:45.000000Z",
        "updated_at": "2022-11-10T14:08:45.000000Z",
        "name": "appart hivanship",
        "price": "50000",
        "description": "appart pavillon loin du tumulte de la ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 1,
                    "value": "700"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 22,
                    "caracteristic_id": 6,
                    "value": "makepe saint-tropez dans le quartier"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 23,
        "created_at": "2022-11-10T16:30:13.000000Z",
        "updated_at": "2022-11-10T16:30:13.000000Z",
        "name": "appartement killimandjaro",
        "price": "100000",
        "description": "petit appart de province pas loin de bonaberi",
        "active": 1,
        "vente": 1,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 1,
                    "value": "750"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 2,
                    "value": "6"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 23,
                    "caracteristic_id": 6,
                    "value": "marché petit-saker"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 24,
        "created_at": "2022-11-10T16:54:43.000000Z",
        "updated_at": "2022-11-10T16:54:43.000000Z",
        "name": "appartement killimandjaro",
        "price": "100000",
        "description": "petit appart de province pas loin de bonaberi",
        "active": 1,
        "vente": 1,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 1,
                    "value": "750"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 2,
                    "value": "6"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 24,
                    "caracteristic_id": 6,
                    "value": "marché petit-saker"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 25,
        "created_at": "2022-11-11T08:25:08.000000Z",
        "updated_at": "2022-11-11T08:25:08.000000Z",
        "name": "kilimanti",
        "price": "89000",
        "description": "appart tres precieux en pleine ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 25,
                    "caracteristic_id": 1,
                    "value": "900"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 25,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 25,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 26,
        "created_at": "2022-11-11T08:38:40.000000Z",
        "updated_at": "2022-11-11T08:38:40.000000Z",
        "name": "appartement killimandjaro",
        "price": "100000",
        "description": "petit appart de province pas loin de bonaberi",
        "active": 1,
        "vente": 1,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 1,
                    "value": "750"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 2,
                    "value": "6"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 26,
                    "caracteristic_id": 6,
                    "value": "marché petit-saker"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 27,
        "created_at": "2022-11-11T09:11:33.000000Z",
        "updated_at": "2022-11-11T09:11:33.000000Z",
        "name": "kilimanti",
        "price": "89000",
        "description": "appart tres precieux en pleine ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 27,
                    "caracteristic_id": 1,
                    "value": "900"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 27,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 27,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 28,
        "created_at": "2022-11-11T09:18:04.000000Z",
        "updated_at": "2022-11-11T09:18:04.000000Z",
        "name": "kilimanti",
        "price": "89000",
        "description": "appart tres precieux en pleine ville",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 1,
                    "value": "900"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 2,
                    "value": "5"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 3,
                    "value": "2"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 4,
                    "value": "1"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 5,
                    "value": "1"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 28,
                    "caracteristic_id": 6,
                    "value": "bonanjo"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 29,
        "created_at": "2022-11-11T14:04:38.000000Z",
        "updated_at": "2022-11-11T14:04:38.000000Z",
        "name": "gyjkbhjb",
        "price": "90000",
        "description": "bjgyg",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 1,
                    "value": "900"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 3,
                    "value": "3"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 29,
                    "caracteristic_id": 6,
                    "value": "polyclinic akwa"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    },
    {
        "id": 30,
        "created_at": "2022-11-11T14:05:04.000000Z",
        "updated_at": "2022-11-11T14:05:04.000000Z",
        "name": "gyjkbhjb",
        "price": "90000",
        "description": "bjgyg",
        "active": 1,
        "vente": 0,
        "prix_vente": 0,
        "users_id": 1,
        "type_de_biens_id": 1,
        "zones_id": 1,
        "zone": {
            "id": 1,
            "created_at": "2022-11-02T13:46:38.000000Z",
            "updated_at": "2022-11-02T13:46:38.000000Z",
            "name": "Douala"
        },
        "typeofgood": {
            "id": 1,
            "created_at": "2022-11-02T15:23:44.000000Z",
            "updated_at": "2022-11-02T15:23:44.000000Z",
            "name": "appartement"
        },
        "caracteristics": [{
                "id": 1,
                "created_at": "2022-11-02T15:20:24.000000Z",
                "updated_at": "2022-11-02T15:20:24.000000Z",
                "name": "superficie",
                "slug": "superficie",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 1,
                    "value": "900"
                }
            },
            {
                "id": 2,
                "created_at": "2022-11-02T15:20:38.000000Z",
                "updated_at": "2022-11-02T15:20:38.000000Z",
                "name": "nombre de chambres",
                "slug": "nombre_de_chambres",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 2,
                    "value": "8"
                }
            },
            {
                "id": 3,
                "created_at": "2022-11-02T15:20:47.000000Z",
                "updated_at": "2022-11-02T15:20:47.000000Z",
                "name": "nombre de salon",
                "slug": "nombre_de_salon",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 3,
                    "value": "3"
                }
            },
            {
                "id": 4,
                "created_at": "2022-11-02T15:21:18.000000Z",
                "updated_at": "2022-11-02T15:21:18.000000Z",
                "name": "nombre de cuisine",
                "slug": "nombre_de_cuisine",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 4,
                    "value": "2"
                }
            },
            {
                "id": 5,
                "created_at": "2022-11-02T15:21:46.000000Z",
                "updated_at": "2022-11-02T15:21:46.000000Z",
                "name": "nombre de douche",
                "slug": "nombre_de_douche",
                "format": "Numerique",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 5,
                    "value": "2"
                }
            },
            {
                "id": 6,
                "created_at": "2022-11-07T11:12:54.000000Z",
                "updated_at": "2022-11-07T11:12:54.000000Z",
                "name": "adresse",
                "slug": "adresse",
                "format": "String",
                "required": 0,
                "showed": 0,
                "pivot": {
                    "bien_id": 30,
                    "caracteristic_id": 6,
                    "value": "polyclinic akwa"
                }
            }
        ],
        "user": {
            "id": 1,
            "name": "Left4code",
            "email": "midone@left4code.com",
            "email_verified_at": "2022-11-01T08:52:02.000000Z",
            "photo": null,
            "active": 1,
            "deleted_at": null,
            "created_at": null,
            "updated_at": null,
            "is_email_verified": 0
        }
    }
];

export default tousLesBiens;