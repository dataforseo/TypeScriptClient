[**Documentation**](../README.md)

***

[Documentation](../README.md) / SslInfo

# Class: SslInfo

Defined in: main.ts:165346

## Implements

- [`ISslInfo`](../interfaces/ISslInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SslInfo()

> **new SslInfo**(`data`?): [`SslInfo`](SslInfo.md)

Defined in: main.ts:165371

#### Parameters

##### data?

[`ISslInfo`](../interfaces/ISslInfo.md)

#### Returns

[`SslInfo`](SslInfo.md)

## Properties

### certificate\_expiration\_date?

> `optional` **certificate\_expiration\_date**: `string`

Defined in: main.ts:165367

ssl certificate expiration date
the date and time when the ssl certificate expires
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_expiration_date`](../interfaces/ISslInfo.md#certificate_expiration_date)

***

### certificate\_hash?

> `optional` **certificate\_hash**: `string`

Defined in: main.ts:165361

ssl certificate hash
the version of the ssl certificate’s hash function

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_hash`](../interfaces/ISslInfo.md#certificate_hash)

***

### certificate\_issuer?

> `optional` **certificate\_issuer**: `string`

Defined in: main.ts:165352

ssl certificate authority
the entity that issued the detected ssl certificate

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_issuer`](../interfaces/ISslInfo.md#certificate_issuer)

***

### certificate\_subject?

> `optional` **certificate\_subject**: `string`

Defined in: main.ts:165355

ssl certificate subject
the entity associated with the public key

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_subject`](../interfaces/ISslInfo.md#certificate_subject)

***

### certificate\_version?

> `optional` **certificate\_version**: `string`

Defined in: main.ts:165358

ssl certificate version
indicates the version of X.509 used by an ssl certificate

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`certificate_version`](../interfaces/ISslInfo.md#certificate_version)

***

### valid\_certificate?

> `optional` **valid\_certificate**: `boolean`

Defined in: main.ts:165349

ssl certificate validity
indicates whether the ssl certificate detected on a website is not expired, suspended, revoked or invalid

#### Implementation of

[`ISslInfo`](../interfaces/ISslInfo.md).[`valid_certificate`](../interfaces/ISslInfo.md#valid_certificate)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165380

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165402

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SslInfo`](SslInfo.md)

Defined in: main.ts:165395

#### Parameters

##### data

`any`

#### Returns

[`SslInfo`](SslInfo.md)
