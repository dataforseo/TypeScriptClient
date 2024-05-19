**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppUserProfileInfo

# Class: AppUserProfileInfo

## Implements

- [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppUserProfileInfo(data)

> **new AppUserProfileInfo**(`data`?): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

• **data?**: [`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md)

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Source

main.ts:188971

## Properties

### profile\_image\_url?

> **`optional`** **profile\_image\_url**: `string`

URL to the reviewer’s profile image

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_image_url`](../interfaces/IAppUserProfileInfo.md#profile_image_url)

#### Source

main.ts:188967

***

### profile\_name?

> **`optional`** **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[`IAppUserProfileInfo`](../interfaces/IAppUserProfileInfo.md).[`profile_name`](../interfaces/IAppUserProfileInfo.md#profile_name)

#### Source

main.ts:188965

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:188980

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:188998

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppUserProfileInfo`](AppUserProfileInfo.md)

#### Source

main.ts:188991
