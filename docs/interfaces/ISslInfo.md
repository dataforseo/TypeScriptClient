[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISslInfo

# Interface: ISslInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### certificate\_expiration\_date?

> `optional` **certificate\_expiration\_date**: `string`

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:153580

***

### certificate\_hash?

> `optional` **certificate\_hash**: `string`

ssl certificate hash
the version of the ssl certificate’s hash function

#### Defined in

main.ts:153574

***

### certificate\_issuer?

> `optional` **certificate\_issuer**: `string`

ssl certificate authority
the entity that issued the detected ssl certificate

#### Defined in

main.ts:153565

***

### certificate\_subject?

> `optional` **certificate\_subject**: `string`

ssl certificate subject
the entity associated with the public key

#### Defined in

main.ts:153568

***

### certificate\_version?

> `optional` **certificate\_version**: `string`

ssl certificate version
indicates the version of X.509 used by an ssl certificate

#### Defined in

main.ts:153571

***

### valid\_certificate?

> `optional` **valid\_certificate**: `boolean`

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid

#### Defined in

main.ts:153562
