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

      <div class="filter_buttons">
        <button
          type="buton"
          class="btn btn-defaut"
          :class="{ active: queryType == 'required_agent_or_distrebutor' }"
          @click="toggleType('required_agent_or_distrebutor')"
        >
          مطلوب وكيل او موزع
        </button>
        <button
          type="buton"
          class="btn btn-defaut"
          :class="{
            active: queryType == 'potential_agent_or_potential_distrebutor',
          }"
          @click="toggleType('potential_agent_or_potential_distrebutor')"
        >
          وكلاء او موزعين محتملين
        </button>
      </div>
      <!-- end::filter_buttons -->

      <!-- start::filter_wrapper -->
      <TenderFilter @handle-form="handleFilter"></TenderFilter>
      <!-- end::filter_wrapper -->

      <div class="agents_card_wrapper">
        <div class="row">
          <div class="col-lg-6" v-for="(item, idx) in agents" :key="idx">
            <AgentsCard :item="item"></AgentsCard>
          </div>
          <!-- end::col -->
        </div>
        <!-- end::row -->
        <b-pagination
          v-model="agentsPaging"
          :total-rows="agentsMeta.total"
          :last-page="agentsMeta.last_page"
          :per-page="agentsMeta.per_page"
          aria-controls="agents"
        ></b-pagination>
      </div>
      <!-- end::agents_card_wrapper -->
    </div>
  </section>
</template>

<script src="~/pages/agents/-script.js"></script>

<style lang="scss" scoped>
.agents_list_wrapper {
  padding-block: 60px;
  .filter_buttons {
    transform: translateY(-30px);
    .btn {
      padding: 8px 15px;
      background-color: transparent;
      border: none;
      color: #919191;
      font-size: 18px;
      font-weight: 500;
      border-radius: 8px !important;
      box-shadow: none;
      transition: all 0.25s;
      &.active {
        background-color: #648dc4;
        color: #fff;
      }
    }
  }
}
</style>
