[dataforseo-client](../README.md) / [Exports](../modules.md) / ISslInfo

# Interface: ISslInfo

## Implemented by

- [`SslInfo`](../classes/SslInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [certificate\_expiration\_date](ISslInfo.md#certificate_expiration_date)
- [certificate\_hash](ISslInfo.md#certificate_hash)
- [certificate\_issuer](ISslInfo.md#certificate_issuer)
- [certificate\_subject](ISslInfo.md#certificate_subject)
- [certificate\_version](ISslInfo.md#certificate_version)
- [valid\_certificate](ISslInfo.md#valid_certificate)

## Properties

### certificate\_expiration\_date

• `Optional` **certificate\_expiration\_date**: `string`

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:143294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143294)

___

### certificate\_hash

• `Optional` **certificate\_hash**: `string`

ssl certificate hash
the version of the ssl certificate’s hash function

#### Defined in

[main.ts:143288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143288)

___

### certificate\_issuer

• `Optional` **certificate\_issuer**: `string`

ssl certificate authority
the entity that issued the detected ssl certificate

#### Defined in

[main.ts:143279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143279)

___

### certificate\_subject

• `Optional` **certificate\_subject**: `string`

ssl certificate subject
the entity associated with the public key

#### Defined in

[main.ts:143282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143282)

___

### certificate\_version

• `Optional` **certificate\_version**: `string`

ssl certificate version
indicates the version of X.509 used by an ssl certificate

#### Defined in

[main.ts:143285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143285)

___

### valid\_certificate

• `Optional` **valid\_certificate**: `boolean`

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid

#### Defined in

[main.ts:143276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143276)
