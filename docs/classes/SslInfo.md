[Documentation](../README.md) / [Exports](../modules.md) / SslInfo

# Class: SslInfo

## Implements

- [`ISslInfo`](../interfaces/ISslInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SslInfo.md#constructor)

### Properties

- [certificate\_expiration\_date](SslInfo.md#certificate_expiration_date)
- [certificate\_hash](SslInfo.md#certificate_hash)
- [certificate\_issuer](SslInfo.md#certificate_issuer)
- [certificate\_subject](SslInfo.md#certificate_subject)
- [certificate\_version](SslInfo.md#certificate_version)
- [valid\_certificate](SslInfo.md#valid_certificate)

### Methods

- [init](SslInfo.md#init)
- [toJSON](SslInfo.md#tojson)
- [fromJS](SslInfo.md#fromjs)

## Constructors

### constructor

• **new SslInfo**(`data?`): [`SslInfo`](SslInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISslInfo`](../interfaces/ISslInfo.md) |

#### Returns

[`SslInfo`](SslInfo.md)

#### Defined in

main.ts:143370

## Properties

### certificate\_expiration\_date

• `Optional` **certificate\_expiration\_date**: `string`

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[certificate_expiration_date](../interfaces/ISslInfo.md#certificate_expiration_date)

#### Defined in

main.ts:143366

___

### certificate\_hash

• `Optional` **certificate\_hash**: `string`

ssl certificate hash
the version of the ssl certificate’s hash function

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[certificate_hash](../interfaces/ISslInfo.md#certificate_hash)

#### Defined in

main.ts:143360

___

### certificate\_issuer

• `Optional` **certificate\_issuer**: `string`

ssl certificate authority
the entity that issued the detected ssl certificate

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[certificate_issuer](../interfaces/ISslInfo.md#certificate_issuer)

#### Defined in

main.ts:143351

___

### certificate\_subject

• `Optional` **certificate\_subject**: `string`

ssl certificate subject
the entity associated with the public key

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[certificate_subject](../interfaces/ISslInfo.md#certificate_subject)

#### Defined in

main.ts:143354

___

### certificate\_version

• `Optional` **certificate\_version**: `string`

ssl certificate version
indicates the version of X.509 used by an ssl certificate

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[certificate_version](../interfaces/ISslInfo.md#certificate_version)

#### Defined in

main.ts:143357

___

### valid\_certificate

• `Optional` **valid\_certificate**: `boolean`

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid

#### Implementation of

[ISslInfo](../interfaces/ISslInfo.md).[valid_certificate](../interfaces/ISslInfo.md#valid_certificate)

#### Defined in

main.ts:143348

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:143379

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:143401

___

### fromJS

▸ **fromJS**(`data`): [`SslInfo`](SslInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SslInfo`](SslInfo.md)

#### Defined in

main.ts:143394
