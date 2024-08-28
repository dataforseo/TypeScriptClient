[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SslInfo

# Class: SslInfo

## Implements

- [`ISslInfo`](../interfaces/ISslInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SslInfo()

> **new SslInfo**(`data`?): [`SslInfo`](SslInfo.md)

#### Parameters

• **data?**: [`ISslInfo`](../interfaces/ISslInfo.md)

#### Returns

[`SslInfo`](SslInfo.md)

#### Defined in

main.ts:156613

## Properties

### certificate\_expiration\_date?

> `optional` **certificate\_expiration\_date**: `string`

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_expiration_date`](../interfaces/ISslInfo.md#certificate_expiration_date)

#### Defined in

main.ts:156609

***

### certificate\_hash?

> `optional` **certificate\_hash**: `string`

ssl certificate hash
the version of the ssl certificate’s hash function

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_hash`](../interfaces/ISslInfo.md#certificate_hash)

#### Defined in

main.ts:156603

***

### certificate\_issuer?

> `optional` **certificate\_issuer**: `string`

ssl certificate authority
the entity that issued the detected ssl certificate

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_issuer`](../interfaces/ISslInfo.md#certificate_issuer)

#### Defined in

main.ts:156594

***

### certificate\_subject?

> `optional` **certificate\_subject**: `string`

ssl certificate subject
the entity associated with the public key

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_subject`](../interfaces/ISslInfo.md#certificate_subject)

#### Defined in

main.ts:156597

***

### certificate\_version?

> `optional` **certificate\_version**: `string`

ssl certificate version
indicates the version of X.509 used by an ssl certificate

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_version`](../interfaces/ISslInfo.md#certificate_version)

#### Defined in

main.ts:156600

***

### valid\_certificate?

> `optional` **valid\_certificate**: `boolean`

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`valid_certificate`](../interfaces/ISslInfo.md#valid_certificate)

#### Defined in

main.ts:156591

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:156622

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:156644

***

### fromJS()

> `static` **fromJS**(`data`): [`SslInfo`](SslInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SslInfo`](SslInfo.md)

#### Defined in

main.ts:156637
