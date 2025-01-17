[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISslInfo

# Interface: ISslInfo

Defined in: main.ts:165254

## Indexable

\[`key`: `string`\]: `any`

## Properties

### certificate\_expiration\_date?

> `optional` **certificate\_expiration\_date**: `string`

Defined in: main.ts:165275

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### certificate\_hash?

> `optional` **certificate\_hash**: `string`

Defined in: main.ts:165269

ssl certificate hash
the version of the ssl certificate’s hash function

***

### certificate\_issuer?

> `optional` **certificate\_issuer**: `string`

Defined in: main.ts:165260

ssl certificate authority
the entity that issued the detected ssl certificate

***

### certificate\_subject?

> `optional` **certificate\_subject**: `string`

Defined in: main.ts:165263

ssl certificate subject
the entity associated with the public key

***

### certificate\_version?

> `optional` **certificate\_version**: `string`

Defined in: main.ts:165266

ssl certificate version
indicates the version of X.509 used by an ssl certificate

***

### valid\_certificate?

> `optional` **valid\_certificate**: `boolean`

Defined in: main.ts:165257

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid
