<template>
  <q-page>
    <content-wrapper>
      <div class="flex flex-col w-full px-20 gap-10 rounded">
        <div class="text-base font-medium flex gap-3 items-center">
          <oh-vue-icon name="bi-person-fill" scale="1.5" class="text-primary" /> Profile
        </div>
        <div class="border border-gray-200 flex flex-col px-8 py-10 gap-5">
          <div class="text-base font-medium">Profile Picture</div>
          <div class="flex gap-5">
            <div>
              <q-avatar rounded size="128px">
                <avatar-default />
              </q-avatar>
            </div>
            <div class="flex flex-col justify-center gap-5">
              <div class="w-40">
                <q-btn class="w-full" text-color="white" color="primary" label="Change Profile" />
              </div>
              <div class="w-40">
                <q-btn class="w-full" text-color="red" color="white" label="Delete Profile" />
              </div>
            </div>
          </div>
          <div class="text-gray-500">The profile picture must be 512 x 512 pixels or less</div>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div class="flex flex-col gap-5">
              <label for="fullname">Full Name</label>
              <q-input filled v-model="fullname" type="text" label="Your Full Name" />
            </div>
            <div class="flex flex-col gap-5">
              <label for="fullname">Phone Number</label>
              <q-input filled v-model="phonenumber" type="text" label="Your Phone Number" />
            </div>
            <div class="flex flex-col gap-5">
              <label for="fullname">Email</label>
              <q-input filled v-model="fullname" type="text" label="Your Email" />
            </div>
            <div class="flex gap-5">
              <div class="flex flex-col gap-5 flex-1">
                <label for="fullname">Change Password</label>
                <q-input filled v-model="fullname" type="text" label="New Password" />
              </div>
              <div class="flex flex-col gap-5 flex-1">
                <label for="fullname">Confirm Password</label>
                <q-input filled v-model="fullname" type="text" label="Existing Password" />
              </div>
            </div>
            <q-btn class="w-full h-12" label="Submit" type="submit" color="primary" />
          </q-form>
        </div>
      </div>
    </content-wrapper>
  </q-page>
</template>
<script setup>
import ContentWrapper from 'src/components/ContentWrapper.vue'
import AvatarDefault from 'src/components/AvatarDefault.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { BiPersonFill } from 'oh-vue-icons/icons'

addIcons(BiPersonFill)
</script>
