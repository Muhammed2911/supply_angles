<template>
  <section class="agents_list_wrapper">
    <div class="container-fluid">
      <!-- start:: breadcrumb -->
      <Breadcrumb :links="breadcrumb"></Breadcrumb>
      <!-- end:: breadcrumb -->

      <div class="title_box flex">
        <h2>الوكلاء و الموزعين</h2>
        <div class="buttons">
          <nuxt-link
            :to="{
              name: 'agents-insert',
              query: { type: 'search_agent' },
            }"
            class="btn btn-default"
          >
            ابحث عن وكيل او موزع لمنتجك
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'agents-insert', query: { type: 'get_agent' } }"
            class="btn btn-default"
          >
            احصل علي حق الوكالة او التوزيع
          </nuxt-link>
        </div>
      </div>
      <!-- end::title_box -->

      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <!-- start:: share_modal -->
      <b-modal id="share_modal" hide-footer hide-header>
        <div class="modal_wrapper">
          <div class="title_box">
            <h4 class="">قم بالمشاركة الأن</h4>
            <h6 class="">
              يمكنك مشاركة مع الاخرين عبر وسائل التواصل المتاحة بالأسفل
            </h6>
          </div>
          <div class="share_buttons">
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :style="{ backgroundColor: network.color }"
              :url="sharing.url"
              :title="selected_item.title"
              :description="selected_item.desc"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitterUser="sharing.twitterUser"
            >
              <b-icon :icon="network.icon" variant="light"></b-icon>
            </ShareNetwork>
          </div>
        </div>
      </b-modal>
      <!-- end:: share_modal -->
    </div>
  </section>
</template>

<script src="~/pages/agents/-script.js"></script>

<style lang="scss" scoped>
.agents_list_wrapper {
  padding-block: 60px;
}
</style>

<style lang="scss">
#share_modal {
  .modal-content {
    border-radius: 15px;
    border: none;
  }
  .modal_wrapper {
    padding: 25px 20px;
    .title_box {
      text-align: center;
      margin-bottom: 25px;
      h4 {
        text-align: center;
        font-size: 24px;
        font-weight: 700;
      }
      h6 {
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: #808080;
      }
    }
    .share_buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-inline-end: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
