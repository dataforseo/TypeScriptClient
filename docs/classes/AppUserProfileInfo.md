[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppUserProfileInfo

# Class: AppUserProfileInfo

Defined in: main.ts:203868

## Implements

- [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppUserProfileInfo()

> **new AppUserProfileInfo**(`data`?): [`AppUserProfileInfo`](AppUserProfileInfo.md)

Defined in: main.ts:203876

#### Parameters

##### data?

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

## Properties

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:203872

URL to the reviewer’s profile image

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_image_url`](../interfaces/IAppUserProfileInfo.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:203870

profile name of the reviewer

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_name`](../interfaces/IAppUserProfileInfo.md#profile_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:203885

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:203903

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppUserProfileInfo`](AppUserProfileInfo.md)

Defined in: main.ts:203896

#### Parameters

##### data

`any`

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)
